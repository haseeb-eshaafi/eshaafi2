


const AdminDashboard = () =>{
    return(
        <>
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">Dashboard</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Dashboard v1</li>
                            </ol>
                        </div>{/* /.col */}
                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            {/* /.content-header */}

            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                    {/* Small boxes (Stat box) */}
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>150</h3>
                                    <p>New Orders</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-bag" />
                                </div>
                                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                                    <p>Bounce Rate</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars" />
                                </div>
                                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>44</h3>
                                    <p>User Registrations</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-person-add" />
                                </div>
                                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-danger">
                                <div className="inner">
                                    <h3>65</h3>
                                    <p>Unique Visitors</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-pie-graph" />
                                </div>
                                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                            </div>
                        </div>
                        {/* ./col */}
                    </div>
                    {/* /.row */}
                    {/* Main row */}
                    <div className="row">
                        {/* Left col */}
                        <section className="col-lg-7 connectedSortable">
                            <div className="card direct-chat direct-chat-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Direct Chat</h3>
                                    <div className="card-tools">
                                        <span data-toggle="tooltip" title="3 New Messages" className="badge badge-primary">3</span>
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                            <i className="fas fa-minus" />
                                        </button>
                                        <button type="button" className="btn btn-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">
                                            <i className="fas fa-comments" />
                                        </button>
                                        <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                                        </button>
                                    </div>
                                </div>
                                {/* /.card-header */}
                                <div className="card-body">
                                    {/* Conversations are loaded here */}
                                    <div className="direct-chat-messages">
                                        {/* Message. Default to the left */}
                                        <div className="direct-chat-msg">
                                            <div className="direct-chat-infos clearfix">
                                                <span className="direct-chat-name float-left">Alexander Pierce</span>
                                                <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                                            </div>
                                            {/* /.direct-chat-infos */}
                                            <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image" />
                                            {/* /.direct-chat-img */}
                                            <div className="direct-chat-text">
                                                Is this template really for free? That's unbelievable!
                                            </div>
                                            {/* /.direct-chat-text */}
                                        </div>
                                        {/* /.direct-chat-msg */}
                                        {/* Message to the right */}
                                        <div className="direct-chat-msg right">
                                            <div className="direct-chat-infos clearfix">
                                                <span className="direct-chat-name float-right">Sarah Bullock</span>
                                                <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                                            </div>
                                            {/* /.direct-chat-infos */}
                                            <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image" />
                                            {/* /.direct-chat-img */}
                                            <div className="direct-chat-text">
                                                You better believe it!
                                            </div>
                                            {/* /.direct-chat-text */}
                                        </div>
                                        {/* /.direct-chat-msg */}
                                        {/* Message. Default to the left */}
                                        <div className="direct-chat-msg">
                                            <div className="direct-chat-infos clearfix">
                                                <span className="direct-chat-name float-left">Alexander Pierce</span>
                                                <span className="direct-chat-timestamp float-right">23 Jan 5:37 pm</span>
                                            </div>
                                            {/* /.direct-chat-infos */}
                                            <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image" />
                                            {/* /.direct-chat-img */}
                                            <div className="direct-chat-text">
                                                Working with AdminLTE on a great new app! Wanna join?
                                            </div>
                                            {/* /.direct-chat-text */}
                                        </div>
                                        {/* /.direct-chat-msg */}
                                        {/* Message to the right */}
                                        <div className="direct-chat-msg right">
                                            <div className="direct-chat-infos clearfix">
                                                <span className="direct-chat-name float-right">Sarah Bullock</span>
                                                <span className="direct-chat-timestamp float-left">23 Jan 6:10 pm</span>
                                            </div>
                                            {/* /.direct-chat-infos */}
                                            <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image" />
                                            {/* /.direct-chat-img */}
                                            <div className="direct-chat-text">
                                                I would love to.
                                            </div>
                                            {/* /.direct-chat-text */}
                                        </div>
                                        {/* /.direct-chat-msg */}
                                    </div>
                                    {/*/.direct-chat-messages*/}
                                    {/* Contacts are loaded here */}
                                    <div className="direct-chat-contacts">
                                        <ul className="contacts-list">
                                            <li>
                                                <a href="#">
                                                    <img className="contacts-list-img" src="dist/img/user1-128x128.jpg" />
                                                    <div className="contacts-list-info">
                                                        <span className="contacts-list-name"> Count Dracula
                                                            <small className="contacts-list-date float-right">2/28/2015</small>
                                                        </span>
                                                        <span className="contacts-list-msg">How have you been? I was...</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img className="contacts-list-img" src="dist/img/user7-128x128.jpg" />
                                                    <div className="contacts-list-info">
                                                        <span className="contacts-list-name"> Sarah Doe
                                                            <small className="contacts-list-date float-right">2/23/2015</small>
                                                        </span>
                                                        <span className="contacts-list-msg">I will be waiting for...</span>
                                                    </div>
                                                    {/* /.contacts-list-info */}
                                                </a>
                                            </li>
                                            {/* End Contact Item */}
                                            <li>
                                                <a href="#">
                                                    <img className="contacts-list-img" src="dist/img/user3-128x128.jpg" />
                                                    <div className="contacts-list-info">
                                                        <span className="contacts-list-name">Nadia Jolie
                                                            <small className="contacts-list-date float-right">2/20/2015</small>
                                                        </span>
                                                        <span className="contacts-list-msg">I'll call you back at...</span>
                                                    </div>
                                                    {/* /.contacts-list-info */}
                                                </a>
                                            </li>
                                            {/* End Contact Item */}
                                            <li>
                                                <a href="#">
                                                    <img className="contacts-list-img" src="dist/img/user5-128x128.jpg" />
                                                    <div className="contacts-list-info">
                                                        <span className="contacts-list-name"> Nora S. Vans
                                                            <small className="contacts-list-date float-right">2/10/2015</small>
                                                        </span>
                                                        <span className="contacts-list-msg">Where is your new...</span>
                                                    </div>
                                                    {/* /.contacts-list-info */}
                                                </a>
                                            </li>
                                            {/* End Contact Item */}
                                            <li>
                                                <a href="#">
                                                    <img className="contacts-list-img" src="dist/img/user6-128x128.jpg" />
                                                    <div className="contacts-list-info">
                                                        <span className="contacts-list-name">John K.
                                                            <small className="contacts-list-date float-right">1/27/2015</small>
                                                        </span>
                                                        <span className="contacts-list-msg">Can I take a look at...</span>
                                                    </div>
                                                    {/* /.contacts-list-info */}
                                                </a>
                                            </li>
                                            {/* End Contact Item */}
                                            <li>
                                                <a href="#">
                                                    <img className="contacts-list-img" src="dist/img/user8-128x128.jpg" />
                                                    <div className="contacts-list-info">
                                                        <span className="contacts-list-name">Kenneth M.
                                                            <small className="contacts-list-date float-right">1/4/2015</small>
                                                        </span>
                                                        <span className="contacts-list-msg">Never mind I found...</span>
                                                    </div>
                                                    {/* /.contacts-list-info */}
                                                </a>
                                            </li>
                                            {/* End Contact Item */}
                                        </ul>
                                        {/* /.contacts-list */}
                                    </div>
                                    {/* /.direct-chat-pane */}
                                </div>
                                {/* /.card-body */}
                                <div className="card-footer">
                                    <form action="#" method="post">
                                        <div className="input-group">
                                            <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                                            <span className="input-group-append">
                                                <button type="button" className="btn btn-primary">Send</button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                                {/* /.card-footer*/}
                            </div>
                            {/*/.direct-chat */}
                        </section>
                        {/* /.Left col */}
                    </div>
                    {/* /.row (main row) */}
                </div>{/* /.container-fluid */}
            </section>

        </>
)
}

export default AdminDashboard;