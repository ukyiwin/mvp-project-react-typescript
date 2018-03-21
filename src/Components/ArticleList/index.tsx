import * as React from 'react';
import ArticleItem from 'Components/ArticleItem';
import { graphql, QueryProps } from 'react-apollo';
import InfiniteScroll from 'react-infinite-scroller';
import { ErrorComponent, LoadingComponent } from 'Components/EmptyStates';
import { ARTICLES } from 'Graphql/Query';
import { Article } from 'CustomTypings/schema';
import ContentLoader from 'react-content-loader';

// const MyFacebookLoader = () => <Facebook />;

const MyLoader = () => (
    <ContentLoader height={200} width={400} speed={2} primaryColor={'#f3f3f3'} secondaryColor={'#ecebeb'}>
        <rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" />
        <rect x="70" y="35" rx="3" ry="3" width="85" height="6.4" />
        <rect x="1" y="136" rx="3" ry="3" width="350" height="6.4" />
        <rect x="-1" y="118" rx="3" ry="3" width="380" height="6.4" />
        <rect x="0" y="150" rx="3" ry="3" width="201" height="6.4" />
        <circle cx="30" cy="30" r="30" />
        <rect x="-0.5" y="70.27" rx="0" ry="0" width="348" height="16" />
        <rect x="1.5" y="89.27" rx="0" ry="0" width="217" height="12" />
        <rect x="2.5" y="175" rx="0" ry="0" width="61" height="18" />
        <rect x="72.5" y="175" rx="0" ry="0" width="55" height="18" />
        <rect x="136.5" y="175.27" rx="0" ry="0" width="56" height="18" />
        <rect x="358.5" y="177.27" rx="0" ry="0" width="25" height="16" />
        <rect x="325.5" y="177.27" rx="0" ry="0" width="23" height="16" />
    </ContentLoader>
);

interface Response {
    articles: Article[];
}

type WrappedProps = Response & QueryProps;

const ArticleList = graphql<Response, {}, WrappedProps>(ARTICLES, {
    props: ({ data }) => ({ ...data }),
});

export default ArticleList(({ loading, articles, error }) => {
    // tslint:disable-next-line:jsx-wrap-multiline
    if (loading) {
        return <LoadingComponent />;
    }
    if (error) {
        return <ErrorComponent />;
    }
    return (
        <InfiniteScroll
            pageStart={0}
            hasMore={true || false}
            loader={
                <div className="uk-padding-small" style={{ backgroundColor: '#fff' }}>
                    <MyLoader />
                </div>
            // tslint:disable-next-line:jsx-curly-spacing
            }
        >
            {articles.map((article) => (
                <div key={article.id}>
                    <ArticleItem article={article} />
                </div>
            ))}
        </InfiniteScroll>
    );
});
