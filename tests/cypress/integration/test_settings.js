const LOCAL_BASE_URL = 'http://localhost:1313'
const LOCAL_ZH_TW_BASE_URL = `${LOCAL_BASE_URL}/zh-tw`

const pages = ['projects', 'tags', 'categories']

const LOCAL_PAGES_URLS = pages.map((p) => `${LOCAL_BASE_URL}/${p}`)
const LOCAL_ZH_TW_PAGES_URLS = pages.map((p) => `${LOCAL_ZH_TW_BASE_URL}/${p}`)

export { LOCAL_BASE_URL, LOCAL_ZH_TW_BASE_URL, LOCAL_PAGES_URLS, LOCAL_ZH_TW_PAGES_URLS }
