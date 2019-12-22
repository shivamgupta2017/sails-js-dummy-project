module.exports = {
  friendlyName: 'save_note',

  description: 'Look up the specified user and welcome them, or redirect to a signup page if no user was found.',

    inputs: {

      title: {
        description: 'The title to try in this attempt, ".',
        type: 'string',
        required: true
      },
  
      notes: {
        description: 'notes',
        type: 'string',
        required: true
      },
      category:{
        description: 'categoryId',
        type: 'number',
        required: true
      }
  
    },


  exits: {
    success: {
      responseType: '',
    },
    notFound: {
      description: 'No user with the specified ID was found in the database.',
      responseType: ''
    }
  },
  fn: async function (inputs, exits) {
    // console.log('req>>',this.req.me);
    // Look up the user whose ID was specified in the request.
    // Note that we don't have to validate that `userId` is a number;
    // the machine runner does this for us and returns `badRequest`
    // if validation fails.
    const insertResponse = await Note.create({
      userId: this.req.me,
      ...inputs
    }).fetch();
    
    return exits.success({ success: true, insertResponse });
  }
};