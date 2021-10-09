mod tmdb_dao;
mod tmdb_service;

#[get("/config")]
pub async fn get_config() -> String {
    let result = tmdb_service_config().await;
    result
}
