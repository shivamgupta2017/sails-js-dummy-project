module.exports = {


  friendlyName: 'Category list',


  description: '',


  inputs: {

  },


  exits: {

    success: {
      description: 'api called successfully',
      responseType: 'success'
    }
  },


  fn: async function (inputs, exits) {
    const list = await Category.find();
    // console.log('list>> ',list);
    // const formattedDate = (list || []).map((each) => {
    //   // const d = new Date(each.createdAt);
    //   return ({
    //     ...each, createdAt: d.getDate() + '.' + (d.getMonth()+1) + '.' + d.getFullYear()
    //   })
    // });
    return exits.success({ success: true, category: list });
  }
};
