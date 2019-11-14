export const configHeader = new Headers( 
    {
      'x-api-key': process.env.API_KEY_THE_CAT_API,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*"
    }
)
