#[macro_use]
extern crate rocket;
extern crate dotenv;

#[path = "tmdb/tmdb_controller.rs"]
mod tmdb_controller;

#[launch]
fn rocket() -> _ {
    dotenv::dotenv().expect("Failed to read .env file");
    rocket::build().mount("/tmdb", routes![tmdb_controller::get_config])
}
