Boots-On-Ground
* The first thing user sees is login page, asked to register if not already.
* After registering or logging in, user is taken to a landing page with a header, and containers which hold organiation for a specific catagory.
* Users will be able to click on the container for the catagories and see a list of the organizations in that specific catagory.
* For each resource they will be shown a the name of the organization, a brief description of what the organization does, and a link to the organizations webpage.
* The admin and organizations will be able to CRUD the resources available, everyone would be able to read them.
* Allow organizations in the db to register for a login to post to the app, so that they can show users what programs they have and what is upcoming for them.
# User Routes
* ('/users/register', methods=["POST])// User will now be registered for app.
* ('/users/login', methods=["POST"])// User will now be logged in to app.
# Resource Routes
* ('/resource/', methods=["GET"]) // Allows user to see all resource catagories available to them. 
* ('resource/catagory' methods=["GET"] // Allows user to see all resources in a specific catagory
* ('/resource/new', methods=["POST"]) // Admin and organizations will now have created a resource.
* ('/resource/:id', methods=["PUT"]) // Admin and organizations can update a resource.
* ('/resource/:id', methods=["Delete"] // Admin and organizations can delete resources.
# Admin Routes
* ('/admin/login', methods=["POST"]) // Admin will now be given access to app to CRUD resources.
# Organization Routes
* ('/organization/register', methods=["POST"]) // Organization Registers and "Creates" itself
* ('/organization/login', methods=["POST"]) // Organization Logs in

