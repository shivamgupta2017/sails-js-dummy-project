module.exports = {


  friendlyName: 'contributionUpdate',


  description: 'Update contribution',


  inputs: {

    id: {
      type: 'number',
      required: true
    },
    title: {
      type: 'string',
      required: true
    },
    notes: {
      type: 'string',
      required: true
    },
    category: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    const contributionUpdateResponse = await Note.updateOne({ id: inputs.id, userId: this.req.me })
      .set({
        title: inputs.title,
        notes: inputs.notes,
        category: inputs.category
      });
    return exits.success({ success: true, insertResponse: contributionUpdateResponse });



  }


};
