/**
 * Track the trade of a commodity from one trader to another
 * @param {org.acme.biznet.VerifyContract} verifyContract - the trade to be processed
 * @transaction
 */

function funVerifyContract(verifyContract) {
    verifyContract.track.verify_remarks = verifyContract.verify_remarks;
  	verifyContract.track.isVerified = verifyContract.isVerified;
    return getAssetRegistry('org.acme.biznet.Tracks')
        .then(function (assetRegistry) {
            return assetRegistry.update(verifyContract.track);
        });
}