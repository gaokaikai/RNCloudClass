import {observer} from 'mobx-react';
import {observable,action} from 'mobx';

class AppStore {
    @observable
    toast = null

    @action
    initToast=(obj)=>{
        this.toast = obj
    }
}

export default new AppStore()
