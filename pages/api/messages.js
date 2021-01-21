// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const messages = [
  {created: 9817320987, content: 'hdbkjcabkjd'},
  {created: 98172323487, content: 'cskjbakj'},
  {created: 43227320987, content: 'hjnrbkjbkjd'},
];


export default (req, res) => {
  res.statusCode = 200
  res.json(messages);
}
