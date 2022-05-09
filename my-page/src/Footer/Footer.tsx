import { PureComponent } from 'react';

type footerData = { contacts: string };

export default class Footer extends PureComponent<footerData> {
    render() {
        return (
            <footer>
                <div className='contacts'>{this.props.contacts}</div>
            </footer>
        );
    }
}