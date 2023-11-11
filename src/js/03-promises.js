import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('form.form');

formRef.addEventListener('submit', event => {
  event.preventDefault();

  const { elements } = event.currentTarget;
  const amount = Number(elements.amount.value);
  const step = Number(elements.step.value);
  let delay = Number(elements.delay.value);

  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, delay)
      .then(({ position, delay }) =>
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`),
      )
      .catch(({ position, delay }) =>
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`),
      );
    delay += step;
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}