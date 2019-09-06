let item = [];

const create =(req,res)=>{
    item.push(req.body)
    res.json(item)
};
const get =(req,res)=>{
    res.json(item)
};
const destroy=(req,res)=>{
    item.splice(+req.params.id,1)
    res.json(item)
};
const edit =(req,res)=>{
    item[+req.params.id]=req.body
    res.json(item)
};
module.exports ={
    create,
    get,
    edit,
    destroy
}