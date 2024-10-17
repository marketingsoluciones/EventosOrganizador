import { api } from "../api";

const types = {
  json: "",
  formData: "",
};

interface fetchApiProps {
  query: string;
  variables: object;
  type: keyof typeof types;
}
export const fetchApi: CallableFunction = async ({
  query = ``,
  variables = {},
  type = "json",
}: fetchApiProps): Promise<any> => {
  try {
    if (type === "json") {
      const {
        data: { data },
      } = await api.graphql({ query, variables });
      return Object.values(data)[0];
    } else if (type === "formData") {
      const formData = new FormData();
      const values = Object?.entries(variables);

      // Generar el map del Form Data para las imagenes
      const map = values?.reduce((acc: any, item: any) => {
        if (item[1] instanceof File) {
          acc[item[0]] = [`variables.${item[0]}`];
        }
        if (item[1] instanceof Object) {
          Object.entries(item[1]).forEach((el) => {
            if (el[1] instanceof File) {
              acc[el[0]] = [`variables.${item[0]}.${el[0]}`];
            }
            if (el[1] instanceof Object) {
              Object.entries(el[1]).forEach((elemento) => {
                if (elemento[1] instanceof File) {
                  acc[elemento[0]] = [
                    `variables.${item[0]}.${el[0]}.${elemento[0]}`,
                  ];
                }
              });
            }
          });
        }
        return acc;
      }, {});

      // Agregar filas al FORM DATA

      formData.append("operations", JSON.stringify({ query, variables }));
      formData.append("map", JSON.stringify(map));
      values.forEach((item) => {
        if (item[1] instanceof File) {
          formData.append(item[0], item[1]);
        }
        if (item[1] instanceof Object) {
          Object.entries(item[1]).forEach((el) => {
            if (el[1] instanceof File) {
              formData.append(el[0], el[1]);
            }
            if (el[1] instanceof Object) {
              Object.entries(el[1]).forEach((elemento) => {
                if (elemento[1] instanceof File) {
                  formData.append(elemento[0], elemento[1]);
                }
              });
            }
          });
        }
      });

      const { data } = await api.graphql(formData);

      if (data.errors) {
        throw new Error(JSON.stringify(data.errors));
      }

      return Object.values(data.data)[0];
    }
  } catch (error) {
    console.log(error);
  }
};



type queries = {
  getChannel: string
  getGeoInfo: string
  setConnet: string
  getAllPost: string
};

export const queries: queries = {
  getChannel: `query ($args: inputChannel, $sort:sortCriteriaChannel, $skip:Int, $limit:Int){
    getChannel(args: $args, sort:$sort, skip:$skip, limit:$limit){
      total
      results{
        _id
        title
        id
        country
        logo
        description
        src
        srcOrigin
        numberChannel
        groupTitle
        info
        status
      }
    }
  }`,

  getAllPost: `query(
      $sort: sortCriteriaPost
      $skip: Int
      $limit: Int
      $development: String!
    )

  {getAllPost(sort:$sort, skip:$skip, limit:$limit, development:$development){
    total
    results{
      _id
      title
      subTitle
      content
      permaLink
      slug
      seoDescription
      categories{
        _id
        title
        heading
        slug
        description
        imgMiniatura{
          _id
          i1024
          i800
          i640
          i320
          videoUrl
        }
        imgBanner{
          _id
          i1024
          i800
          i640
          i320
          videoUrl
        }
      }
      subCategories{
        _id
        title
        heading
        slug
        description
        imgMiniatura{
          _id
          i1024
          i800
          i640
          i320
          videoUrl
        }
        imgBanner{
          _id
          i1024
          i800
          i640
          i320
          videoUrl
        }
        icon{
          _id
          i1024
          i800
          i640
          i320
          videoUrl
        }
      }
      authorUid
      authorUsername
      postFormat
    }
  }
}`,

  
  getGeoInfo: `query  {
    getGeoInfo {
      referer
      acceptLanguage
      loop
      connectingIp
      ipcountry
    }
  }`,
  setConnet: `mutation  {
    setConnet 
  }`,
};