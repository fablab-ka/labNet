Template.editSocketModal.helpers({
  socket: function() {
    var id = Session.get("editSocket");
    return mcRittal.findOne({_id: id});
  },
  modal_title_edit: function() {
    return "Edit Socket " + Session.get("editSocket");
  },
  modal_title_del: function() {
    return "Delete Socket " + Session.get("editSocket");
  }
})

Template.editSocketModal.events({
  'click button.save': function(event, template) {
    var id = template.$('.socket-id').val();
    var name = template.$('.socket-name').val();
    var description = template.$('.socket-description').val();

    Meteor.call("updateSocket", id, name, description, function(error,data) {
      if(error) {
        Flash.danger(error);
      } else {
        Flash.success("Socket " + id + " updated!")
      }
    });

    $("#editSocketModal").modal('hide')
  },
  'click button.delete': function(event, template) {
    $("#editSocketModal").modal('hide');
    $("#deleteSocketModal").modal('show');
  },
  'click button.delete-confirmation': function(event, template) {
    var id = Session.get("editSocket");

    Meteor.call("deleteSocket", id, function(error,data) {
      if(error) {
        Flash.danger(error);
      } else {
        Flash.success("Socket " + id + " deleted!")
      }
    });

    $("#deleteSocketModal").modal('hide');
  }
})

Template.editSocketButton.events({
  'click .edit-socket': function(event, template) {
    Session.set("editSocket", event.target.id);
    $("#editSocketModal").modal('show')
  }
})
