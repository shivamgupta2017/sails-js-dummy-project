module.exports = {

  friendlyName: 'fnf calculation',


  description: 'Return a personalized greeting based on the provided name.',


  inputs: {

    priceArray: {

      type: 'ref',
      required: true
    },
    comparetiveUserId: {
      type: 'number',
      required: true
    }

  },


  fn: async function (inputs, exits) {


    let amountOfTotalBusinessDoneByAOnBehalfOfB = 0;
    let businessDoneByA = inputs.priceArray, userIdB = inputs.comparetiveUserId;

    for (let businessOfAIteration = 0; businessOfAIteration < (businessDoneByA || []).length; businessOfAIteration++) {
      if (businessDoneByA[businessOfAIteration].contributor.length) {

        let innerIterate = 0, isAnotherContributorFound = false;
        while (innerIterate < businessDoneByA[businessOfAIteration].contributor.length) {
          if (businessDoneByA[businessOfAIteration].contributor[innerIterate].userId === userIdB) {
            isAnotherContributorFound = true;
            break;
          }
          innerIterate++;
        }

        if (isAnotherContributorFound) {
          amountOfTotalBusinessDoneByAOnBehalfOfB += (businessDoneByA[businessOfAIteration].amount || 0) / (businessDoneByA[businessOfAIteration].contributor.length + 1);
        }

      }

    }

    return exits.success(Number(amountOfTotalBusinessDoneByAOnBehalfOfB.toFixed(2)));
  }

}