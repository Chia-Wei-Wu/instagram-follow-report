const TEXTS = {
    zh: {
        pageTitle: "IG Report",
        mainTitle: "Instagram Follow Tracker",
        description: "快速找出那些悄悄「自動退蹤的人」",
        tabTitleUpload: "📂 檔案上傳",
        tabTitleHowTo: "💡 如何使用",
        tabTitleDiscussion: "💬 討論區",
        tab1ResultTitle: "結果",
        tab2Title: "思考",
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
                <h3 style="color: #E1306C; margin-top: 5px; font-weight: 700;">三步驟，快速從 IG 匯出檔案</h3>
                <ol style="padding-left: 20px;">
                    <li style="margin-bottom: 20px;">
                        <strong>尋找指定檔案</strong>
                        <p style="margin-top: 5px; margin-bottom: 5px;">
                            在 Instagram 進入個人頁面，選右上角的<span style="font-weight: bold;">選單</span>(三條橫線）。
                        </p>
                        <p style="margin-top: 0px;">
                            搜尋「下載」，點選下載資訊，建立匯出檔案，選擇個人檔案，匯出到裝置。
                        </p>
                    </li>
                    <li style="margin-bottom: 20px;">
                        <strong>自訂下載格式</strong>
                        <ul style="list-style: disc; margin-top: 10px; padding-left: 20px;">
                            <li style="margin-bottom: 5px;"><span style="font-weight: bold;">自訂資訊：</span>只選擇 <span style="color: #C13584; font-weight: bold;">「粉絲和追蹤對象」</span>，其餘項目請取消勾選。</li>
                            <li style="margin-bottom: 5px;"><span style="font-weight: bold;">日期範圍：</span>選擇 <span style="color: #C13584; font-weight: bold;">不限</span>。</li>
                            <li><span style="font-weight: bold;">格式：</span>選擇 <span style="color: #C13584; font-weight: bold;">JSON</span>。</li>
                        </ul>
                        <p style="margin-top: 10px;">點選 <span style="font-weight: bold; color: #4CAF50;">「開始匯出」</span>。Instagram 會準備檔案並透過電子郵件通知您完成下載。</p>
                    </li>
                    <li style="margin-bottom: 20px;">
                        <strong>上傳檔案</strong>
                        <style="margin-top: 5px;">
                            下載並解壓縮後，進入資料夾，並上傳以下檔案至指定位置：
                        <ul style="list-style: disc; margin-top: 10px; padding-left: 20px;">
                            <li>followers_1.json</li>
                            <li>following.json</li>
                        </ul>
                    </li>
                </ol>
            </div>
        `,
        tab2Content: `
            <blockquote class="miyazaki-quote">
                人生就像一列單行的列車，路途上會有許多站，很難有人可以整趟陪著走完。當陪你的人要下車時，即使不捨，也該心存感激，然後勇敢揮手道別。
                <footer style="text-align: right; margin-top: 10px; font-style: normal; color: #777;">— 宮崎駿</footer>
            </blockquote>
        `,
        tab3text: `
            <h3>數據安全</h3>
            我們深知個人隱私的重要性。因此，關於您的 Instagram 數據，我們有以下說明:
            <ul>
                <li>本服務提供檢查詢功能，您無需上傳任何有關 IG 的帳號密碼或個人資料。</li>
                <li>本服務不會記錄、儲存或分享任何與您的 IG 帳戶有關的個人資訊。</li>
            </ul>
            請安心使用，您的隱私是我們的首要考量。
        `,
        tab3Content: `
            <p>哈囉</p>
        `,
    },
    en: {
        pageTitle: "IG Report",
        mainTitle: "Instagram Follow Tracker",
        description: "Quickly spot those who quietly unfollow you!",
        tabTitleUpload: "📂 File Upload",
        tabTitleHowTo: "💡 How to Use",
        tabTitleDiscussion: "💬 Discussion",
        tab1ResultTitle: "Results",
        tab2Title: "Thinking",
        tab3Title: "Statistics",
        followersBtnDefault: "Select followers (followers_1.json)",
        followingBtnDefault: "Select following (following.json)",
        analyzeBtn: "⚡ Start Analysis",
        statusInitial: "Status: Please upload the two exported Instagram files.",
        resultInitial: "(The analysis list will appear here. Please upload the files and click Start.)",
        statusAnalyzing: "Status: Reading, parsing files, and performing efficient comparison...",
        statusSelectFiles: "Status: Failed. Please upload the required files.",
        statusAnalyzingSuccess: (fCount, gCount) => `✅ Analysis complete! Total followers: ${fCount}, following: ${gCount}.`,
        statusFileError: (msg) => `❌ Analysis failed! Please check if the file format is correct. (${msg})`,
        resultFollowers: "People who follow you but you don’t follow back",
        resultFollowing: "People you follow but who don’t follow you back",
        viewIg: "View IG",
        tab2text: `
            <div style="font-family: Arial, sans-serif;">
                <h3 style="color: #E1306C; margin-top: 5px; font-weight: 700;">Three Steps to Quickly Export IG Files</h3>
                <ol style="padding-left: 20px;">
                    <li style="margin-bottom: 20px;">
                        <strong>Locate the Export Feature</strong>
                        <p style="margin-top: 5px; margin-bottom: 5px;">
                            On Instagram, go to your profile page and select the <span style="font-weight: bold;">Menu</span> (three horizontal lines) in the top right corner.
                        </p>
                        <p style="margin-top: 0px;">
                            Search for "Download," tap "Download information," create the export file, select your profile, and choose to export to your device.
                        </p>
                    </li>
                    <li style="margin-bottom: 20px;">
                        <strong>Customize Download Format (Crucial)</strong>
                        <ul style="list-style: disc; margin-top: 10px; padding-left: 20px;">
                            <li style="margin-bottom: 5px;"><span style="font-weight: bold;">Information Types:</span> Only select <span style="color: #C13584; font-weight: bold;">"Followers and following"</span>, uncheck all other items.</li>
                            <li style="margin-bottom: 5px;"><span style="font-weight: bold;">Date Range:</span> Select <span style="color: #C13584; font-weight: bold;">"All Time"</span>.</li>
                            <li><span style="font-weight: bold;">Format:</span> Choose <span style="color: #C13584; font-weight: bold;">"JSON"</span>.</li>
                        </ul>
                        <p style="margin-top: 10px;">Tap <span style="font-weight: bold; color: #4CAF50;">"Start Export"</span>. Instagram will prepare the file and notify you via email when the download is complete.</p>
                    </li>
                    <li style="margin-bottom: 20px;">
                        <strong>Upload Files</strong>
                        <style="margin-top: 5px;">
                            After downloading and unzipping the file, navigate to the folder, and upload the following files to the designated area:
                        <ul style="list-style: disc; margin-top: 10px; padding-left: 20px;">
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
            <h3>Data Privacy and Security</h3>
            We deeply understand the importance of your personal privacy. Therefore, regarding your Instagram data, we offer the following commitment:
            <ul>
                <li>This service functions for **checking and querying** only. You are *not* required to upload any IG account passwords or personal information.</li>
                <li>This service will *not* record, store, or share any personal information related to your IG account.</li>
            </ul>
            Please use with confidence; your privacy is our top priority.
        `,
        tab3Content: `
            <p>Hello</p>
        `,
    },
};