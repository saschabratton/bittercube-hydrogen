import { CacheNone, gql, Seo, useShopQuery} from '@shopify/hydrogen';

export function DefaultSeo() {
  const {
    data: {
      shop: {name, description},
    },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheNone(),
    preload: false
  });

  return (
    <Seo
      type="defaultSeo"
      data={{
        title: name,
        description: 'Bittercube slow crafts nine varieties of artisanal bitters in a weeks-long process. We are active in every stage of bitters creation, from conception to bottling.',
        titleTemplate: `%s · ${name}`,

      }}
    />
  );
}

const SHOP_QUERY = gql`
  query shopInfo {
    shop {
      name
      description
    }
  }
`;
