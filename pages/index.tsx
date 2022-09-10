import { useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';
import { withLayout } from '../layout/layout.component';

function Home(): JSX.Element {
  const [rating, setRating] = useState(0);

  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Button type='button' appearance='primary' arrow='right'>Кнопка</Button>
      <Button type='button' appearance='ghost' arrow='right'>Кнопка</Button>

      <P size='s'>text</P>
      <P size='m'>text</P>
      <P size='l'>text</P>

      <Tag size='s'>text</Tag>
      <Tag size='m'>text</Tag>
      <Tag color='primary' href='avx'>text</Tag>

      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}

export default withLayout(Home);
