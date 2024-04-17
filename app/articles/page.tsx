import Candidate from '@/app/articles/Candidate';

const ArticlesPage = () => {
  return (
    <div className="py-5 grid grid-cols-2 w-full gap-12">
      <Candidate candidate="Trump" color="red" />
      <Candidate candidate="Biden" color="blue" />
    </div>
  );
};

export default ArticlesPage;
