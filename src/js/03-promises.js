import Notiflix from 'notiflix';

const refs = {
  firstDelayEl: document.querySelector('input[name="delay"]'),
  delayStepEl: document.querySelector('input[name="step"]'),
  amountEl: document.querySelector('input[name="amount"]'),
  formEl: document.querySelector('.form'),
};

refs.formEl.addEventListener('submit', onClickCreatePromises);

function onClickCreatePromises(evt) {
  evt.preventDefault();

  const delay = Number(refs.firstDelayEl.value);
  const delayStep = Number(refs.delayStepEl.value);
  const amount = Number(refs.amountEl.value);

  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, delay + delayStep * i)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}
