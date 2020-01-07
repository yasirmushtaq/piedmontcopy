<!--<template>
  <div class="navBar">
    <nuxt-link to="/" class="brand">
      <img src="~/assets/images/logo.jpg" class="logo" />
    </nuxt-link>
    <nav>
      <nuxt-link to="/">
        List |
      </nuxt-link>
      <nuxt-link to="/products">
        All Products
      </nuxt-link>
    </nav>
  </div>
</template>
<style scoped>
.navBar {
  width: 1170px;
  margin: 0 auto;
}
.brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #333333;
  text-decoration: none;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
.nav a {
  display: inline-block;
}
.logo {
  width: 200px;
}
</style> -->
<template>
<div  class="container">
  <div class="row">
    <nuxt-link to="/" class="brand">
      <img src="~/assets/images/logo.jpg" class="logo" />
    </nuxt-link>
  </div>

  
  <div class="header">
    <div class="row">
    <!--Main Menu HTML Code-->
      <nav class="dropdown-navigation ">
                <ul class="dropdown-navigation-mobile dropdown-navigation-list">
                
                  <li class="mobile-menuopner">
                    <a href="#"><i class="fa fa-bars"></i>Menu</a>
                  </li>
                
                  <li aria-haspopup="true"><a href="/products">All Products</a>
                    <ul class="dropdown-navigation-submenu">
                      <li><a href="#">Banners </a></li>
                      <li><a href="#">Booklets</a></li>
                      <li><a href="#">Bookmarks</a></li>
                      <li><a href="#">Brouchers</a></li>
                      <li><a href="#">Business Cards</a></li>
                      <li><a href="#">Calendars</a></li>
                      <li><a href="#">CD/DVD Sleeves</a></li>
                      <li><a href="#">Door Hangers</a></li>
                      <li><a href="#">Envelopes</a></li>
                      <li><a href="#">Event Tickets</a></li>
                      <li><a href="#">Funeral Programs</a></li>
                      <li><a href="#">Flyers</a></li>
                      <li><a href="#">Greeting Cards</a></li>
                      <li><a href="#">Hang Tags</a></li>
                      <li><a href="#">ID Badges</a></li>
                      <li><a href="#">Invitation Cards</a></li>
                      <li><a href="#">Letterheads</a></li>
                      <li><a href="#">Magnets</a></li>
                      <li><a href="#">Memo Pads</a></li>
                      <li><a href="#">Menus</a></li>
                      <li><a href="#">Newsletters</a></li>
                      <li><a href="#">Notepads</a></li>
                      <li><a href="#">Pocket Folders</a></li>
                      <li><a href="#">Postcards</a></li>
                      <li><a href="#">Posters</a></li>
                      <li><a href="#">Rack cards</a></li>
                      <li><a href="#">Sell Sheets</a></li>
                      <li><a href="#">Signs</a></li>
                      <li><a href="#">Stickers</a></li>
                      <li><a href="/products">See All Products</a></li>
                      
                    </ul>
                  </li>
                 
                   <li aria-haspopup="true"><a href="#" class="red">Marketing Materials</a>
                    <div class="conatiner-fluid megamenu ">
                        <div class="row px-4">
                        <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                          <li class="title"> Best Sellers</li>
                          <li><a href="#">Business Cards</a></li>
                          <li><a href="#">Brochures</a></li>
                          <li><a href="#"><span class="green font-weight-bold pr-1">NEW</span>Booklets & Catalogs</a></li>
                          <li><a href="#">Banners</a></li>
                          <li><a href="#">Calendars</a></li>
                          <li><a href="#">Postcards</a></li>
                          <li><a href="#">Posters</a></li>
                          <li><a href="#">Stikers</a></li>
                        </ul>

                        <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                          <li class="title">Advertising</li>
                          <li><a href="#">Door Hangers</a></li>
                          <li><a href="#">Menus</a></li>
                          <li><a href="#">Rack Cards</a></li>
                          <li><a href="#">Table Tents</a></li>
                          <li><a href="#">Bookmarks</a></li>
                        </ul>

                        <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                          <li class="title"><a href="#">Labels & Stickers</a></li>
                          <li><a href="#">Roll Labels</a></li>
                          <li><a href="#">Sheet Stickers</a></li>
                          <li><a href="#">See all Labels & Stickers</a></li>
                        </ul>
                        
                        <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                          <li class="title">Stationery</li>
                          <li><a href="#">Greeting Cards</a></li>
                          <li><a href="#">Envelopes</a></li>
                          <li><a href="#">Letterheads</a></li>
                          <li><a href="#">Notepads</a></li>
                          <li><a href="#">Rack Cards</a></li>
                        </ul>

                        <ul class="col-lg-12 col-md-12 col-xs-12 ">
                          <li class="bottom-link"><a href="#">Shop all Marketing Materials ></a></li>
                        </ul>
                      </div>
                    </div>
                  </li>

                
                  <li aria-haspopup="true"><a href="#" class="red">Promotional Products</a>
                    <div class="conatiner-fluid megamenu ">
                      <div class="row px-4">
                      <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                        <li class="title"> Best Sellers</li>
                        <li><a href="#">Postcards</a></li>
                        <li><a href="#">Flyers</a></li>
                        <li><a href="#">Brochures</a></li>
                        <li><a href="#">Presentation Folders</a></li>
                        <li><a href="#"><span class="green font-weight-bold">NEW</span> Booklets</a></li>

                        <li class="title">Services</li>
                        <li><a href="#">Postcard Mailing Services</a></li>
                        <li><a href="#">Graphic Design Services</a></li>
                      </ul>

                      <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                        <li class="title">Advertising</li>
                        <li><a href="#">Door Hangers</a></li>
                        <li><a href="#">Menus</a></li>
                        <li><a href="#">Rack Cards</a></li>
                        <li><a href="#">Table Tents</a></li>
                        <li><a href="#">Bookmarks</a></li>
                      </ul>

                      <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                        <li class="title">Packaging</li>
                        <li><a href="#">Hang Tags</a></li>
                        <li><a href="#">Paper Bags</a></li>

                        <li class="title">Packaging</li>
                        <li><a href="#">Labels & Stickers</a></li>
                        <li><a href="#">Roll Labels</a></li>
                        <li><a href="#">Sheet Stickers</a></li>
                        <li><a href="#">See all Labels & Stickers</a></li>
                      </ul>
                      
                      <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                        <li class="title">Office Supplies</li>
                        <li><a href="#">Pens</a></li>
                        <li><a href="#">Notebooks</a></li>
                        <li><a href="#">Mugs</a></li>
                        <li><a href="#">Sticky Notes</a></li>
                        <li><a href="#">Stamps & Ink</a></li>
                        <li><a href="#">Gift Certificates</a></li>

                        <li class="title">Magnets</li>
                        <li><a href="#">Car Magnets</a></li>
                        <li><a href="#">Magnetic Business Cards</a></li>
                        <li><a href="#">See all Magnets</a></li>
                      </ul>

                      <ul class="col-lg-12 col-md-12 col-xs-12 ">
                        <li class="bottom-link"><a href="#">Shop all Marketing Materials ></a></li>
                      </ul>
                    </div>
                  </div>
                  </li>
                 
                  <li aria-haspopup="true"><a href="#">Banners & Signs</a>
                    <div class="conatiner-fluid megamenu ">
                      <div class="row px-4">
                      <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                        <li class="title">Banners</li>
                        <li><a href="#">Vinyl Banners</a></li>
                        <li><a href="#">Retractable Banners</a></li>
                        <li><a href="#">Canvas Banners</a></li>
                        <li><a href="#">See all Banners</a></li>

                      </ul>

                      <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                        <li class="title">Posters</li>
                        <li><a href="#">Posters</a></li>
                        <li><a href="#">Foam Boards</a></li>
                        <li><a href="#">NEW LED Light Boxes</a></li>

                      </ul>
                 
                      <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                        <li class="title">Signs</li>
                        <li><a href="#">A-frame Signs</a></li>
                        <li><a href="#">Yard Signs</a></li>
                        <li><a href="#">Metal Signs</a></li>
                        <li><a href="#">Acrylic Signs</a></li>
                        <li><a href="#">PVC Signs</a></li>
                        <li><a href="#">Car Magnets Signs</a></li>

                      </ul>
                      <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                        <li class="title">Decals</li>
                        <li><a href="#">Window Decals</a></li>
                        <li><a href="#">Wall Decals</a></li>
                        <li><a href="#">Mesh Decals</a></li>

                      </ul>
                      <ul class="col-lg-12 col-md-12 col-xs-12 ">
                        <li class="bottom-link"><a href="#">Shop all Banners & Signs ></a></li>
                      </ul>
                      </div>
                  </div>
                  </li>

                      <li aria-haspopup="true"><a href="#">Labels & Stickers</a>
                    <div class="conatiner-fluid megamenu ">
                      <div class="row px-4">
                      <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                        <li class="title"> Stickers</li>
                        <li><a href="#">Custom Stickers</a></li>
                        <li><a href="#">Sheet Stickers</a></li>
                        <li><a href="#">Vinyl Stickers</a></li>
                        <li><a href="#">Bumper Stickers</a></li>
                        <li><a href="#"><span class="green font-weight-bold">NEW</span> Window Clings</a></li>
                        <li><a href="#">Roll Labels</a></li>
                      </ul>
                      <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                        <li class="title">Labels</li>
                        <li><a href="#"><span class="green font-weight-bold">NEW</span> Window Clings</a></li>
                        <li><a href="#">Roll Labels</a></li>
                      </ul>

                      <ul class="col-lg-12 col-md-12 col-xs-12 ">
                        <li class="bottom-link"><a href="#">Shop all Labels & Stickers ></a></li>
                      </ul>
                    </div>
                  </div>
                  </li>

                   <li aria-haspopup="true"><a href="#">Books Printing</a>
                    <div class="conatiner-fluid megamenu ">
                        <div class="row px-4">
                        <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                          <li class="title">Bindding</li>
                          <li><a href="#">Perfect Bind</a></li>
                          <li><a href="#">Coil Bind</a></li>
                          <li><a href="#">Wire-O Bind</a></li>
                        </ul>
                        <ul class="col-lg-12 col-md-12 col-xs-12 ">
                          <li class="bottom-link"><a href="#">Shop all Books Printing ></a></li>
                        </ul>
                        </div>
                    </div>
                  </li>

                    <li aria-haspopup="true"><a href="#">Photo Calendars</a>
                    <div class="conatiner-fluid megamenu ">
                        <div class="row px-4">
                        <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                          <li class="title">Calendars</li>
                          <li><a href="#">Wall Calendars</a></li>
                          <li><a href="#">Desk Calendars</a></li>
                          <li><a href="#">Poster Calendars</a></li>
                          <li><a href="#"> Magnetic Calendars</a></li>
                        </ul>
                        <ul class="col-lg-12 col-md-12 col-xs-12 ">
                          <li class="bottom-link"><a href="#">Shop all Photo Calendars ></a></li>
                        </ul>

                        </div>
                    </div>
                  </li>


                  <li aria-haspopup="true"><a href="#">Invitations & Stationary</a>
                    <div class="conatiner-fluid megamenu ">
                      <div class="row px-4">
                      <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                        <li class="title"> Best Sellers</li>
                        <li><a href="#">Greeting Cards</a></li>
                          <li><a href="#">Envelopes</a></li>
                          <li><a href="#">Letterheads</a></li>
                          <li><a href="#">Notepads</a></li>
                          <li><a href="#">Rack Cards</a></li>
                      </ul>

                      <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                        <li class="title">Advertising</li>
                        <li><a href="#">Door Hangers</a></li>
                        <li><a href="#">Menus</a></li>
                        <li><a href="#">Rack Cards</a></li>
                        <li><a href="#">Table Tents</a></li>
                        <li><a href="#">Bookmarks</a></li>
                      </ul>

                      <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                        <li class="title">Packaging</li>
                        <li><a href="#">Hang Tags</a></li>
                        <li><a href="#">Paper Bags</a></li>
                      </ul>
                      
                      <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                        <li class="title">Office Supplies</li>
                        <li><a href="#">Pens</a></li>
                        <li><a href="#">Notebooks</a></li>
                        <li><a href="#">Mugs</a></li>
                        <li><a href="#">Sticky Notes</a></li>
                        <li><a href="#">Stamps & Ink</a></li>
                        <li><a href="#">Gift Certificates</a></li>

                        <li class="title">Magnets</li>
                        <li><a href="#">Car Magnets</a></li>
                        <li><a href="#">Magnetic Business Cards</a></li>
                        <li><a href="#">See all Magnets</a></li>
                      </ul>

                      <ul class="col-lg-12 col-md-12 col-xs-12 ">
                        <li class="bottom-link"><a href="#">Shop all Marketing Materials ></a></li>
                      </ul>
                    </div>
                  </div>
                  </li>

                  <li aria-haspopup="true"><a href="#">Digital Marketing</a>
                    <div class="conatiner-fluid megamenu ">
                      <div class="row px-4">
                      <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                        <li class="title"> Best Sellers</li>
                        <li><a href="#">Postcards</a></li>
                        <li><a href="#">Flyers</a></li>
                        <li><a href="#">Brochures</a></li>
                        <li><a href="#">Presentation Folders</a></li>
                        <li><a href="#"><span class="green font-weight-bold">NEW</span> Booklets</a></li>

                        <li class="title">Services</li>
                        <li><a href="#">Postcard Mailing Services</a></li>
                        <li><a href="#">Graphic Design Services</a></li>
                      </ul>

                      <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                        <li class="title">Advertising</li>
                        <li><a href="#">Door Hangers</a></li>
                        <li><a href="#">Menus</a></li>
                        <li><a href="#">Rack Cards</a></li>
                        <li><a href="#">Table Tents</a></li>
                        <li><a href="#">Bookmarks</a></li>
                      </ul>

                      <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                        <li class="title">Packaging</li>
                        <li><a href="#">Hang Tags</a></li>
                        <li><a href="#">Paper Bags</a></li>

                        <li class="title">Packaging</li>
                        <li><a href="#">Labels & Stickers</a></li>
                        <li><a href="#">Roll Labels</a></li>
                        <li><a href="#">Sheet Stickers</a></li>
                        <li><a href="#">See all Labels & Stickers</a></li>
                      </ul>
                      
                      <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                        <li class="title">Office Supplies</li>
                        <li><a href="#">Pens</a></li>
                        <li><a href="#">Notebooks</a></li>
                        <li><a href="#">Mugs</a></li>
                        <li><a href="#">Sticky Notes</a></li>
                        <li><a href="#">Stamps & Ink</a></li>
                        <li><a href="#">Gift Certificates</a></li>

                        <li class="title">Magnets</li>
                        <li><a href="#">Car Magnets</a></li>
                        <li><a href="#">Magnetic Business Cards</a></li>
                        <li><a href="#">See all Magnets</a></li>
                      </ul>

                      <ul class="col-lg-12 col-md-12 col-xs-12 ">
                        <li class="bottom-link"><a href="#">Shop all Marketing Materials ></a></li>
                      </ul>
                    </div>
                  </div>
                  </li>

                  <li aria-haspopup="true"><a href="#">Design Services</a>
                    <div class="conatiner-fluid megamenu ">
                      <div class="row px-4">
                      <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                        <li class="title"> Best Sellers</li>
                        <li><a href="#">Postcards</a></li>
                        <li><a href="#">Flyers</a></li>
                        <li><a href="#">Brochures</a></li>
                        <li><a href="#">Presentation Folders</a></li>
                        <li><a href="#"><span class="green font-weight-bold">NEW</span> Booklets</a></li>

                        <li class="title">Services</li>
                        <li><a href="#">Postcard Mailing Services</a></li>
                        <li><a href="#">Graphic Design Services</a></li>
                      </ul>

                      <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                        <li class="title">Advertising</li>
                        <li><a href="#">Door Hangers</a></li>
                        <li><a href="#">Menus</a></li>
                        <li><a href="#">Rack Cards</a></li>
                        <li><a href="#">Table Tents</a></li>
                        <li><a href="#">Bookmarks</a></li>
                      </ul>

                      <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                        <li class="title">Packaging</li>
                        <li><a href="#">Hang Tags</a></li>
                        <li><a href="#">Paper Bags</a></li>

                        <li class="title">Packaging</li>
                        <li><a href="#">Labels & Stickers</a></li>
                        <li><a href="#">Roll Labels</a></li>
                        <li><a href="#">Sheet Stickers</a></li>
                        <li><a href="#">See all Labels & Stickers</a></li>
                      </ul>
                      
                      <ul class="col-lg-3 col-md-3 col-xs-12 link-list">
                        <li class="title">Office Supplies</li>
                        <li><a href="#">Pens</a></li>
                        <li><a href="#">Notebooks</a></li>
                        <li><a href="#">Mugs</a></li>
                        <li><a href="#">Sticky Notes</a></li>
                        <li><a href="#">Stamps & Ink</a></li>
                        <li><a href="#">Gift Certificates</a></li>

                        <li class="title">Magnets</li>
                        <li><a href="#">Car Magnets</a></li>
                        <li><a href="#">Magnetic Business Cards</a></li>
                        <li><a href="#">See all Magnets</a></li>
                      </ul>

                      <ul class="col-lg-12 col-md-12 col-xs-12 ">
                        <li class="bottom-link"><a href="#">Shop all Marketing Materials ></a></li>
                      </ul>
                    </div>
                  </div>
                  </li>

                  <li><a href="#" class="pink">Deals</a></li>
                  
                </ul>
      </nav>
  <!--Menu HTML Code--> 
    </div>
  </div>

  </div>
</template>

<style scoped src="@/assets/css/navigation.css">
</style>