type Props = {
  name: string;
  id: number;
};

export const CategoryItem = ({ name }: Props) => {
  return (
    <div className='category item'>
      <div className='content'>
        <div className='header'>{name}</div>
      </div>
    </div>
  );
};
