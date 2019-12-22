module.exports = {


  attributes: {

    fullName: {
      type: 'string',
      required: true,
      maxLength: 200
    },
    emailAddress: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200,
      example: 'mary.sue@example.com'
    },
    password: {
      type: 'string',
      required: true,
      description: 'Securely hashed representation of the user\'s login password.',
      protect: true,
      example: '2$28a8eabna301089103-13948134nad'
    },
    // userRelation: {
    //   collection: 'contribution',
    //   via: 'userId'
    // }
  }
};