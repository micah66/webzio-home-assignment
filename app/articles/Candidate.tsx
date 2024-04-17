import Link from 'next/link';

import { CANDIDATES, QUERIES } from '@/constants/candidates';
import { COLORS } from '@/constants/colors';
import { API_URL } from '@/constants/urls';
import { parseQuery } from '@/utils/parseQuery';

import ArticleCard, { TArticle } from './ArticleCard';
import SentimentMeter from './SentimentMeter';

const METER_HEIGHT = 100;
const METER_WIDTH = 100;

export type TArticleReturnData = {
  posts: TArticle[];
  totalResults: number;
  moreResultsAvailable: number;
  next: string;
  requestsLeft: number;
  warnings: unknown;
};

export async function getData<TReturnData>(url: string): Promise<TReturnData> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Error fetching data');
  }
  return res.json();
}

export default async function Candidate({
  candidate,
  color,
}: {
  candidate: (typeof CANDIDATES)[keyof typeof CANDIDATES];
  color: 'red' | 'blue';
}) {
  const height = `h-[${METER_HEIGHT}px]`;
  const width = `w-[${METER_WIDTH}px]`;

  const articles = await getData<TArticleReturnData>(
    `${API_URL}?token=${process.env.API_TOKEN}&q=${parseQuery(QUERIES[candidate])}`
  );

  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-center justify-center h-[50px]">
        <h1 className={`text-3xl ${COLORS.text[color]}`}>{candidate}</h1>
        <div className={`${height} ${width} pt-4`}>
          <SentimentMeter
            value={
              articles.posts.reduce(
                (total, post) => (total += post.sentiment === 'positive' ? 1 : 0),
                0
              ) * 10
            }
            height={METER_HEIGHT}
            width={METER_WIDTH}
          />
        </div>
      </div>
      <div className="grid [grid-template-columns:repeat(auto-fit,_minmax(200px,_1fr))] gap-4">
        {articles.posts.map((article) => (
          <Link
            key={article.uuid}
            href={{
              pathname: `/articles/${article.uuid}`,
              query: { candidate: candidate },
            }}
          >
            <ArticleCard article={article} />
          </Link>
        ))}
      </div>
    </div>
  );
}
