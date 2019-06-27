const contact = () => {
  const tab = document.createElement('div');
  const email = document.createElement('input');
  const subject = document.createElement('textarea');
  const submit = document.createElement('input');

  tab.classList.add('tab');

  email.setAttribute('type', 'email');
  subject.setAttribute('type', 'text');
  submit.setAttribute('type', 'submit');
  email.setAttribute('placeholder', 'Email');
  subject.setAttribute('placeholder', 'Subject');
  submit.setAttribute('placeholder', 'Message');

  tab.appendChild(email);
  tab.appendChild(subject);
  tab.appendChild(submit);

  return tab;
};

export { contact as default };
