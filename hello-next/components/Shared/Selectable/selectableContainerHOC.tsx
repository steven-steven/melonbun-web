import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SideToolbar from '../../Shared/SideToolbar/index';
import RootRef from '@material-ui/core/RootRef';
import { Subtract } from 'utility-types';

export interface IInjectedSelectableProps{
    onItemSelect: (ref:React.RefObject<HTMLButtonElement>) => void; //pass the ref of the selected item
    selectedItemId: string;
}

interface IEnhancedSelectableProps{
    onItemDelete?: (id:any) => void;
    onItemCreate: (newItem:any) => void;
}


interface ISelectableState {
    selectedRef: React.RefObject<HTMLButtonElement> | any;
}

const SelectableContainerHOC = <P extends IInjectedSelectableProps>(MainBodyComponent: React.ComponentType<P>) => {

    class SelectableContainer extends React.Component<Subtract<P, IInjectedSelectableProps> & IEnhancedSelectableProps, ISelectableState> {
        
        private toolbarRef = React.createRef<HTMLElement>();
        constructor(props) {
            super(props);
            this.state = {
                selectedRef: null,
            };
        }

        componentDidMount(){
            window.addEventListener('mousedown', this.handleClick, false);
        }
        componentWillUnmount(){
            window.removeEventListener('mousedown', this.handleClick, false);
        }
        
        handleClick = (e) =>{
            const {selectedRef} = this.state;

            const toolBarNode = this.toolbarRef ? this.toolbarRef.current: null;

            if(selectedRef==null || selectedRef.current == null ||
                selectedRef.current.contains(e.target) || 
                (toolBarNode!=null && toolBarNode.contains(e.target)) )
            {
                return;
            }
        
            //clicked outside target
            this.setState({
                selectedRef: null
            });
        }

        componentDidUpdate({},prevState) {
            const {selectedRef} = this.state;

            if(selectedRef && selectedRef.current){
                selectedRef.current.focus();
                console.log(selectedRef.current.id);
            }else if(prevState.selectedRef && prevState.selectedRef.current){
                //target deleted
                this.setState({
                    selectedRef: null
                });
            }
        };

        handleSelect = (ref:React.RefObject<HTMLButtonElement>) => {
            this.setState({
                selectedRef: ref
            });
        }
        
        render(){
            const {onItemDelete, onItemCreate, ...props} = this.props as IEnhancedSelectableProps;
            const {selectedRef} = this.state;
            return (
                <Grid container direction="row" justify="flex-end"spacing={16}>
                    <Grid item sm={12} md={2}>
                        <RootRef rootRef={this.toolbarRef}>
                            <SideToolbar selectedItemId={selectedRef?selectedRef.current.id:null} onItemDelete={onItemDelete} onItemCreate={onItemCreate}/>
                        </RootRef>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <MainBodyComponent onItemSelect={this.handleSelect} selectedItemId={selectedRef?selectedRef.current.id:null} {...props} />
                    </Grid>
                </Grid>
            )
        }
    }

    return SelectableContainer
}

export default SelectableContainerHOC
