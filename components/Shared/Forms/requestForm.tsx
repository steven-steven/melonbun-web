import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {IRequestForm} from '../../../redux/dataTypes/request';

const formStyle = (theme:any)=> ({
    
});

interface IProps {
    /** callback to submit form information */
    onSubmit: (newForm:any) => void;
    /** Optional default form information */
    initialFormObj?:IRequestForm
}

export class RequestForm extends Component<IProps, IRequestForm>{

    constructor(props: IProps) {
        super(props);
        const { initialFormObj } = this.props;
        this.state = initialFormObj ? initialFormObj : this.getInitState();
    }

    getInitState() {
        return {
            name:'',
            description:'',
            created_by:'',
            price:{ value: 0, currency: '$' },
            tags:[]
        }
    }

    handleFormSubmit = ()=>{
        //Todo: validate
        this.props.onSubmit({
            ...this.state
        })
        this.setState(this.getInitState())
    }

    handleFormInputChange = (name:string) => ({target:{value}}) => {
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    render(){
        const {
            name,
            description,
            created_by,
            price,
            tags
        } = this.state;
        const { initialFormObj } = this.props

        return(
            <form>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Name"
                    value={name}
                    onChange={this.handleFormInputChange('name')}
                    fullWidth
                />
                <br/>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Description"
                    value={description}
                    onChange={this.handleFormInputChange('description')}
                    fullWidth
                    multiline
                    rows="4"
                />
                <br/>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Created By"
                    value={created_by}
                    onChange={this.handleFormInputChange('created_by')}
                    fullWidth
                    multiline
                    rows="4"
                />
                <br/>
                <Button onClick={this.handleFormSubmit} color="primary">
                    {initialFormObj ? 'Edit' : 'Create'}
                </Button>
            </form>
        )
    }
    
}

export default withStyles(formStyle)(RequestForm);
