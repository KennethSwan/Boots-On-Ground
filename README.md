Boots-On-Ground---Flask
The first thing user sees is login page, asked to register if not already.
After registering or logging in, user is taken to a landing page with a header, and containers which hold resources for a specific catagory.
Users will be able to click on the container for the resources and see a list of the resoruces in that specific catagory.
For each resource they will be shown a the name of the organization, a brief description of what the resource does, and a link to the resources webpage.
The admin will be the only user that is able to completely CRUD the resources.
The admin will be the ONLY one that can CRUD the resources, everyone would be able to read them.
Allow organizations in the db to register for a login to post to the app, so that they can show users what programs they have and what is upcoming for them.
User Routes
User Register route. user.route('/register', methods=["POST])// User will now be registered for app.
User Login route. user.route('/login', methods=["PUT])// User will now be logged in to app.
Show Resources
User route to see all resources show.route('/', methods=["GET"]) // Allows user to see all resources available to them that have been added by admin, as well as the posts made by the resource(If any)
Admin Routes
Admin Login route. admin.route('/login', methods=["PUT"]) // Admin will now be given access to app to CRUD resources.
Admin route for creating a resource. admin.route('/', methods=["POST"]) // Admin will now have created a resource.
Admin route for updating a resource. admin.route('/', methods=["PUT"]) // Admin can update a resource
Admin route for deleting a resource. admin.route('/' methods=["Delete"] // Admin can delete resources.
Resource Routes
Resource route to allow resource to register for the app. resource.route('/register', methods=["POST"])
Resource route to allow resource to login to app. resource.route('/login', methods=["PUT"])
Resource route to allow resource to post to the app. resource.route('/', methods=["POST"]
Resource route to allow resource to update their post on the app. resource.route('/', methods=["PUT"])
Resource route to allow resource to delete their posts on the app. resource.route('/', methods=["Delete"])