//FormRenderHelper
import RequestForm from './requestForm';

export const FormType = {
    REQUEST: 'REQUEST',
    ITEM: 'ITEM'
}
 
export const RenderForm = (formType:string, {onFormSubmit, initialFormObj=undefined})=> {
    switch(formType) {

        case FormType.REQUEST:
            return (<RequestForm onSubmit={onFormSubmit} initialFormObj={initialFormObj}/>);

        default:
            return;
    }
}
