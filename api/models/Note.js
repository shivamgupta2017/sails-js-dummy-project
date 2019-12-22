module.exports = {
  attributes: {

    userId: {
      model:'user',
      required: true,
    },

    title: {
      type: 'string',
      required: true,
      // defaultsTo: 0.00,
      // allowNull: true
    },

    notes: {
      type: 'string',
      required: true,
      // description: 'Full representation of the contribution.',
      maxLength: 120,
      // example: 'Mary Sue van der McHenst'
    },
    category: {
      // type:'number',
      // required: true,
      model: 'category',
      // via: 'id'
    },
    // userRelation: {
    //   collection: 'user',
    //   via: 'id'
    // }


  }

};

// https://sailsjs.com/documentation/concepts/models-and-orm/attributes
