import { FC } from 'react';

type headerData = { name: string };

const Header: FC<headerData> = (props) => (
    <header className='App-header'>
      <h1>{props.name}</h1>
    </header>
);

export default Header;