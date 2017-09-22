var Ticket = require('./ticket.model.js');

module.exports.save = function(req, res){
  var newTicket = new Ticket({
    nameEvent: req.body.nameEvent,
    place: req.body.place,
    name: req.body.name,
    firstName : req.body.firstName,
    secondName: req.body.secondName,
    email: req.body.email,
    reservedTickets: req.body.reservedTickets,
    status: req.body.status
  });

  newTicket.save(function(err){
    if(err){
      res.json({success:false, msg:'No se registraron los tiquetes' + err});
    }else{
      res.json({success:true, msg:'Se registraron los tiquetes correctamente'});
    }
  });
}

module.exports.findAll = function(req,res){
  Ticket.find().then(function(tickets){
    res.send(tickets);
  })
};

module.exports.update = function(req,res){

  Ticket.findByIdAndUpdate(req.body._id, { $set: req.body}, function (err, ticket) {
    if (err){
      res.json({success:true,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }

  });

}