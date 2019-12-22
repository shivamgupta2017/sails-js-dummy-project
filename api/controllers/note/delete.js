module.exports = {


  friendlyName: 'Delete contribution',


  description: '',


  inputs: {
    // id: {
    //   type: 'number',
    //   required: true
    // }
  },


  exits: {

  },


  fn: async function (inputs) {

    // All done.
    const deleteResponse = await Note.destroyOne({ id: this.req.params.id });

    return { deleteResponse: deleteResponse };

  }


};
