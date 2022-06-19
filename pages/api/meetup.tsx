import { supabase } from '../../helpers/supabaseClient'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const response = await supabase.from('meetup').insert({
      title: req.body.title,
      image: req.body.image,
      description: req.body.description,
      address: req.body.address,
    })
    res.status(201).json(response.data)
  }
}
