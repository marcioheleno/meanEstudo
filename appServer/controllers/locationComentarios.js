/**
 * Created by marcioheleno on 09/05/16.
 */
// GET "Adicionar Críticas" page
module.exports.addReview = function (req, res) {
  res.render('locationReviewForma', {
    title : 'Adicionar um Comentário',
    pageHeader : {
      titulo : 'Comentários Pague Menos'
    }
  });
};