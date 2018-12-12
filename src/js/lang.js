import AJAX from './ajax';
export default class Language {
    constructor(lang = 'en') {
        this.lang = lang;
        this.trad_list = {};

        this.load()
    }

    load() {
        AJAX.get('translations/' + this.lang + '.json',  (data) =>  {
            this.trad_list = data;
        });
    }

    get(key) {
        return this.trad_list[key] ?this.trad_list[key]: key;
    }
}