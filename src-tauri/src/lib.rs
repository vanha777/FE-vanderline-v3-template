use tauri::plugin;
pub use tauri_plugin_nfc;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        // .plugin(tauri_plugin_nfc::init())
        // .plugin(tauri_plugin_biometric::init())
        // .plugin(tauri_plugin_barcode_scanner::init())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
