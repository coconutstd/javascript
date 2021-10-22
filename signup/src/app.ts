import template from './app.template';
import { CantContainWhiteSpace, CanStarNumber, MinimumLengthLimit } from './constant';
import { AnyObject } from './types';
import { TextField, PasswordField, AddressField } from './views';

export default class App {
  template = template;
  data: AnyObject;
  container: HTMLElement;
  fields: AnyObject[];
  active: boolean = false;

  constructor(container: string, data: AnyObject = {}) {
    this.container = document.querySelector(container) as HTMLElement;
    this.data = data;
    this.fields = [];

    this.initialize();

    setInterval(this.validFieldMonitor, 1000/30);
  }

  private initialize = () => {
    const nameField = new TextField('#required-fields', {
      id: 'name', label: '이름', type: 'text', placeholder: '이름을 입력해주세요', require: true,
    });

    const idField = new TextField('#required-fields', {
      
    })
  }
}
