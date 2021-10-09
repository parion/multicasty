use std::env;

use crate::tmdb_controller::tmdb_dao::get_tmdb_api_config;

pub async fn tmdb_service_config() -> String {
    dotenv::dotenv().expect("Failed to read .env file");
    let base_url: String = "https://api.themoviedb.org/3/configuration?api_key=".to_owned();
    let borrowed_string: String = env::var("TMDB_API_KEY").expect("TMDB_API_KEY not found");
    match get_tmdb_api_config(format!("{}{}", base_url, borrowed_string)).await {
        Ok(result) => result,
        Err(_) => "bad".to_string(),
    }
}
