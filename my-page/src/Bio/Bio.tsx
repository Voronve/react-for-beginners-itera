import { FC } from 'react';

type bioData = { bio: string };

const Bio: FC<bioData> = (props) => (
    <div className='bio'>
      <div>{props.bio}</div>
    </div>
);

export default Bio;