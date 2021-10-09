pub async fn get_the_config(url: String) -> Result<String, Box<dyn std::error::Error>> {
    let body = reqwest::get(url).await?.text().await?;
    Ok(body)
}
