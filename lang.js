const TEXTS = {
    zh: {
        pageTitle: "IG Report",
        mainTitle: "Instagram Follow Tracker",
        description: "快速找出那些悄悄「退蹤的人」",
        tabTitleUpload: "📂 檔案上傳",
        tabTitleHowTo: "💡 如何使用",
        tabTitleDiscussion: "🔒 安全性",
        tab1ResultTitle: "結果",
        tab2Title: "電影名言",
        tab3Title: "統計數字",
        followersBtnDefault: "選擇追蹤者 (followers_1.json)",
        followingBtnDefault: "選擇追蹤中 (following.json)",
        analyzeBtn: "⚡ 開始分析",
        statusInitial: "狀態: 請上傳兩個 Instagram 導出的檔案。",
        resultInitial: "（分析列表會顯示在這裡。請上傳檔案並點擊開始比對。）",
        statusAnalyzing: "狀態: 正在讀取、解析檔案並進行高效比對...",
        statusSelectFiles: "狀態: 失敗。請上傳指定檔案。",
        statusAnalyzingSuccess: (fCount, gCount) => `✅ 分析成功！總計追蹤者 ${fCount} 人，追蹤 ${gCount} 人。`,
        statusFileError: (msg) => `❌ 分析失敗！請檢查檔案格式是否正確。 (${msg})`,
        resultFollowers: "追蹤你但你沒回追的人",
        resultFollowing: "你追蹤但對方沒回追的人",
        viewIg: "查看 IG",
        tab2text:`
            <div style="font-family: Arial, sans-serif;">
            <h3 style="color: #E1306C; margin-top: 5px; font-weight: 700;">三步驟 快速從 IG 匯出檔案</h3>
            <ol style="padding-left: 20px;">
                <li style="margin-bottom: 20px;">
                    <strong>尋找指定檔案</strong>
                    <p style="margin-top: 5px; margin-bottom: 5px;">在 Instagram 中進入個人頁面，選右上角的<span style="font-weight: bold;">選單</span> (≡)</p>
                    <p style="margin-top: 0px;">搜尋「下載」，點下載資訊 → 建立匯出檔案 → 選擇個人檔案 → 匯出到裝置</p>
                </li>
                <li style="margin-bottom: 20px;">
                    <strong>自訂下載格式</strong>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                        <tbody>
                            <tr>
                                <td style="padding: 5px 10px; border: 1px solid #ddd;">自訂資訊</td>
                                <td style="padding: 5px 10px; border: 1px solid #ddd;">僅選擇「粉絲和追蹤對象」，其餘項目取消</td>
                            </tr>
                            <tr>
                                <td style="padding: 5px 10px; border: 1px solid #ddd;">日期範圍</td>
                                <td style="padding: 5px 10px; border: 1px solid #ddd;">不限</td>
                            </tr>
                            <tr>
                                <td style="padding: 5px 10px; border: 1px solid #ddd;">格式</td>
                                <td style="padding: 5px 10px; border: 1px solid #ddd;">JSON</td>
                            </tr>
                        </tbody>
                    </table>
                    <p style="margin-top: 10px;">點選 <span style="font-weight: bold; color: #4CAF50;">「開始匯出」</span>。Instagram 會準備檔案並透過電子郵件通知您完成下載</p>
                </li>
                <li style="margin-bottom: 20px;">
                    <strong>上傳檔案</strong>
                    <p style="margin-top: 5px;">下載並解壓縮後，上傳以下檔案至指定位置</p>
                    <ul style="list-style: disc; margin-top: -30px; padding-left: 20px;">
                        <li>followers_1.json</li>
                        <li>following.json</li>
                    </ul>
                </li>
                <li style="margin-bottom: 20px;">
                    <strong>其他說明</strong>
                    <ul style="list-style: disc; margin-top: -30px; padding-left: 20px;">
                        <li>你的 Follower 或 Following 屬於關帳狀態，其帳號依舊會被顯示</li>
                        <li>有其他問題，歡迎到
                            <a href="https://github.com/Chia-Wei-Wu/instagram-follow-report/issues" target="_blank">「討論區」</a>留言，我們會盡快回覆
                        </li>
                    </ul>
                </li>
            </ol>
            </div>
        `,
        tab2Content: `
            <blockquote class="miyazaki-quote">
                人生就像一列單行火車，路上會經過許多車站，但很難有人能整趟陪著走完。當陪你的人要下車時，即使不捨，也該心存感激，然後勇敢揮手道別。
                <footer style="text-align: right; margin-top: 10px; font-style: normal; color: #777;">— 宮崎駿</footer>
            </blockquote>
        `,
        tab3text: `
            <div style="font-family: Arial, sans-serif;">
                <h3 style="color: #E1306C; margin-top: 5px; font-weight: 700;">數據安全</h3>
                我們深知個人隱私的重要性，故本服務：
                <ul>
                    <li>僅提供查詢功能，無需上傳任何 IG 的帳號與密碼</li>
                    <li>不會記錄、儲存或分享任何與您的 IG 帳戶有關的資訊</li>
                </ul>
                請安心使用，您的隱私是我們的首要考量！
            </div>
        `,
        tab3Content: `
            <p style="text-align: center;">C.W, Wu &copy; 2025</p>
        `,
    },
    en: {
        pageTitle: "IG Report",
        mainTitle: "Instagram Follow Tracker",
        description: "Quickly spot those who unfollow you!",
        tabTitleUpload: "📂 File Upload",
        tabTitleHowTo: "💡 How to Use",
        tabTitleDiscussion: "🔒 Privacy Policy",
        tab1ResultTitle: "Results",
        tab2Title: "Quote",
        tab3Title: "Statistics",
        followersBtnDefault: "Select followers (followers_1.json)",
        followingBtnDefault: "Select following (following.json)",
        analyzeBtn: "⚡ Start Analysis",
        statusInitial: "Status: Please upload the two Instagram files.",
        resultInitial: "(The analysis list will appear here. Please upload the files and click Start.)",
        statusAnalyzing: "Status: Reading, parsing files, and performing efficient comparison...",
        statusSelectFiles: "Status: Failed. Please upload the required files.",
        statusAnalyzingSuccess: (fCount, gCount) => `✅ Analysis complete! Total followers: ${fCount}, following: ${gCount}.`,
        statusFileError: (msg) => `❌ Analysis failed! Please check if the file format is correct. (${msg})`,
        resultFollowers: "People who follow you but you do not follow back",
        resultFollowing: "People you follow but who do not follow you back",
        viewIg: "View IG",
        tab2text: `
            <div style="font-family: Arial, sans-serif;">
            <h3 style="color: #E1306C; margin-top: 5px; font-weight: 700;">Three simple steps to quickly export files from Instagram</h3>
            <ol style="padding-left: 20px;">
                <li style="margin-bottom: 20px;">
                    <strong>Find the Specified File</strong>
                    <p style="margin-top: 5px; margin-bottom: 5px;">Go to your profile page in Instagram and tap the icon in the top right corner <span style="font-weight: bold;">Menu</span> (≡)</p>
                    <p style="margin-top: 0px;">Google Download，click Download your information → Create export → Choose a profile → Expert to device</p>
                </li>
                <li style="margin-bottom: 20px;">
                    <strong>Customize Download Format</strong>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                        <tbody>
                            <tr>
                                <td style="padding: 5px 10px; border: 1px solid #ddd;">Customize information</td>
                                <td style="padding: 5px 10px; border: 1px solid #ddd;">Only Followers and following</td>
                            </tr>
                            <tr>
                                <td style="padding: 5px 10px; border: 1px solid #ddd;">Data range</td>
                                <td style="padding: 5px 10px; border: 1px solid #ddd;">All time</td>
                            </tr>
                            <tr>
                                <td style="padding: 5px 10px; border: 1px solid #ddd;">Format</td>
                                <td style="padding: 5px 10px; border: 1px solid #ddd;">JSON</td>
                            </tr>
                        </tbody>
                    </table>
                    <p style="margin-top: 10px;">Click <span style="font-weight: bold; color: #4CAF50;"> Start export.</span> Instagram will prepare the file and notify you via email when it’s ready for download.</p>
                </li>
                <li style="margin-bottom: 20px;">
                    <strong>Upload File</strong>
                    <p style="margin-top: 5px;">After downloading and unzipping, upload the following files to the designated location.</p>
                    <ul style="list-style: disc; margin-top: -30px; padding-left: 20px;">
                        <li>followers_1.json</li>
                        <li>following.json</li>
                    </ul>
                </li>
            </ol>
            </div>
        `,
        tab2Content: `
            <blockquote class="miyazaki-quote">
                Life is like a one-way train. Along the journey, there will be many stops, and it's hard for someone to accompany you all the way. When those who accompany you need to get off, even if you feel reluctant, you should be grateful and bravely wave goodbye.
                <footer style="text-align: right; margin-top: 10px; font-style: normal; color: #777;">— Hayao Miyazaki</footer>
            </blockquote>
        `,
        tab3text: `
            <div style="font-family: Arial, sans-serif;">
                <h3 style="color: #E1306C; margin-top: 5px; font-weight: 700;">Data Security</h3>
                We understand the importance of personal privacy, therefore this service:
                <ul>
                    <li>Only provides a lookup function and does not require uploading any Instagram account or password.</li>
                    <li>Does not record, store, or share any information related to your Instagram account.</li>
                </ul>
                Rest assured, your privacy is our top priority!
            </div>
        `,
        tab3Content: `
            <p style="text-align: center;">C.W, Wu &copy; 2025</p>
        `,
    },
};