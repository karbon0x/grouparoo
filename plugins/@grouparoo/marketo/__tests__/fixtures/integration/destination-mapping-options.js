const nock = require("nock");

nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/identity/oauth/token")
  .query({
    grant_type: "client_credentials",
    client_id: "98628d43-73e8-7a3d-9725-f1fd7be3755c",
    client_secret: "qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT",
  })
  .once()
  .reply(
    200,
    {
      access_token: "my-access-token",
      token_type: "bearer",
      expires_in: 3461,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 08 Dec 2020 20:05:39 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Cache-Control",
      "no-store",
      "Pragma",
      "no-cache",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads/describe.json")
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003a55b5d6fdbb812fd2b82f7b50f49ea2669de52a7057cd1b441bc8b05f6e2e242966957a82c79f5d16d50f4bfeff09b9c11455a7debaee7cc391c92c3e188f9b168d9df03ebfaf56e71b7b85c6eb7f96f9737d7cbd7fb376ff7dbe5e215fcde0d55bfb8fbef8f450936cb578b5dd99daafce5537e64805935c7535ebf64e23fe1c7bccf7f7f39f15fbabe2deb03b8a8587de8bf2ceeaedebc79b5e89afcb4b8fbb1a83db820ca779febea6571b7cfab8efd14d4406c4c0bc93462faf3951407ee7d719bb267607fae28056b59445127dd633b2de71acb795756158424bbdfed20ac9dafac67df7bf83f283e0ab2e95bc6f8cf988b44692b3982002dee26246e55f62fbeb2a4895442153a5566c05c8bbc0d89dcf4f9ac9935e194f054999a0edb6b9d6f433a57cd50f7edafc4d338c0dca199b79418a1d55e5e84e43e355d9f57d9aad9cdd9362ab8d289f2813584544f828cf04b2cfc4fb6559bd0d9e3435bc1029eca3a1616d5f78f61c0a646d51556f5989775f6f4a5a9e744918335165392e81d278c8d3e9216efeb7a80697e66df583d208dc5d0b6ac2ef89245a948a22c282a2e17346180114812e5a7e198bd3f9eaae685319426cbba6707d6527980d9b2f6f3dec54525d609202393a4cc75bd1b2039ced9de0e342ab2b434d8d668239972b35ea5ece325e40234cf804cddbc5d59044cb5b02b926b4cc1d0f4786ec78fc0c7af7da3409f14068781ee8b38462b5c92a4f2fe7bcfda5ae44159db4071045b7ca2b27903a38413ddad56e034174e9472e102cb36124855851983ab7ed42f1153f20104d9497ef8305455724187c67d84c8ab5ad012f6edc07e9ad192edfec4daaea9335137c6038d96ab042baca50c1491274115b0360ac96e5a77d953def6b5483cce4ad8364dc5f25a44d79b7e1e867567315898a122a503507d84c2d35f7196078d7edd29634c40d740c8524be18bd82f9f41ca0a125c733c73d80e08cb326464d701d97dddd42fc7664029df0e1eadb5b27311412a723e6ff26a8002b26cf8c439b39954e87a60cc49a2deb954d8da04e3358efc87b2edfae42d88d68400933d18d8107bce143036fa487e7a2c77bb8acd1528d1015212c2a3e00a581b8924897dcce74790630384445e15b635e248c67b0f855b357e0f64fc27589753f5ab808ba413b9a16a67c195476a1a517a66b298f277c74915b453c2920b57ed2c288ca4e0c706aeb64c96d5b3f54927c92a8f8233646ea697e4f00ff9f7d912019b32b3fb51332de99ae4f2ff34dbecf7b2af50b99f94f2340e4f16d90bbd22c0864616c9faaba6eef3a2875255945afe8a6bd99ef1cb08d78c721cc5614e22ae905496c922bcfae49a9c170fd02dc89a7df6ae6ca18fe51d19707a8ca8e38066afcd2d4f200773279f83e62678e49438a38f644da36a72d39dc2a64609390f66368d02ed1f3a75b22715d44392bf6ed84064cf6a476a1c66228aa04f22261e1b9a1091946ffb32e78ab248cc466415c17691114633fe2f357d261b3744df497045ee8cd724f7eb0b427964d95f896d15542baac21f3c28073696deeebf2199f3735b1e4a7e1ddc34435bb0946bca58a75bbb915e02371012b046910750be74925d35a796beaef78d9fbf68febfb88008a06cabfd4815ca8b0d6020adf9da09cad74e92ee333b94a04e94e95a7fc20d712cf4aeab40200343681d119348bdbd6e489276",
      "c9f538e6ce83ebebbcb9a00321f3214360064272bc5e04d986e56df1257b5fc3b698534e6847d28f7193be9e04ff08ce5f51e450d0bc7a004f5fdabcfbf5011837670e6004e70f801c216600cfbc306af1ad3cdef7d60e1c7cb2e8518c2f981c2df29ab3aebfe595684139279fbdd4a35c23301612d527ae38617bb39ec9a1e289cb56f9306b2db872b58fb33487404638b95dfc5177c3b62bda72cb52db4408121538f814d85e6bbb25278e4b041f1872e8ebcd39705c37c60b56410e4b57751065b49313e7a1c9a0c10c2ba1e2f7ef94b5fad00040d947d5ed268c8d28727c38a2d2d728aa7d7833d2488dadb75b92f85d0926ac4e78d26a0823c0b8488f581062e24692fd63de7e653dffdabe19ba13ab77e1bd82a3a5912e106b35c424498f10cf9f3822253a7b2407bfabf2e26bf6116aa9e4086c39c42082432719d5a59a3d66873c3a58921ad545417f27721669f8db92c468081e2d49327c334d43f4dab8bc20bbd9f4abb3f5939f63e8261a792d63e0021d959aeb7efaa8b99549763cd486bcbed88db76592a46a1763ed9640b15d2ad6318857685c5e90edaee940f1dc1717da85f5100db055ac492d0429267942d365a9bd1394a60c37ee8d206292100cb16876c0217d48fc10121020dc182fc100906c6174c81642cad76a71b90bc8083422503448c6302a1e59df36a7a62afbbcceee611829fb33a0c5f5a55c85e2421fe31845a2ef2ca4fc726c78eb9e0b219d173f3c572461c922d93d099d9c6a6b7814075193bb203b7aff96797945720f629c7d8ef81a6247c9e515492958c83d7f7fe78c1efe0905063c822447844f2d70e10090c4f0c04ef0a9f9c86ac49794763d30262542772e15b636e7c36bd2125b812d9413597a480a8940b1f057df6b7a9b38f1209fc33348c4340f09f9aa69be96f835ca78bcd14a2f0c321c3e9281cd0313f896cce065817cfe80df7c10fe895726c291f433fa22c4cc257dedc2df0f2809fefa9ef8fae263f0c8c932ab80428a137b457fb3f4677f4972cf33bcadf0258d8604f50fb836854c1216b0b51123194a8c5eb6df22f2c69a911c6dc0490a83d65623495e52237ca4c08f294808831a35384d63c8da6a24bb4e6a2c9a16cd72f0b193089db24f531530b6a2c8defca33da8e78f4eaadf574d2e5f5f7b8f7c06638bd5580252f63cb565d39237d676cc28c19cac7998845435cfac82c6f937966da6c28ba85a05d298201f7d2964f846c3171c9c66b4a82027fda22d96cf330c53fc9181335b494bdc003123c95efc1384a0c0966692691b0c26f998b72fe22557b68627ab22d45ef930915ed5811072827510c52771a028380f93a3c082bdf4bbbc216b48c497bf602bf94ba90c1f4f13fa31f2c14bfb81db5fc50f09cd3679882d6fc7d39d7a699cad5e0a7828f2088fd8ab6ccdb99db511531df461e336a15fa18500c11f1907c93e22725a035cac0e6cf6081cf439da056c52f6352d95ef8bbf87121ee2f375f2d43687363f26877d042bc71c559d5b56451ad14dc2ed723fc80fface5a817f060a7cde0372b00a8a05ebfc70f396ac57de8dcac1fefffb9255a8893fdea92208cc46b2401461f591a359ddecc6e4d94b1f2abc30262a3006b0fac8c4891bd6983af103acbda9476a3e382a73dadc8a2427bd3af6c664da1311051163a2ea6200ab8f247851d58ca9d3e50ed2e6db47954d9b6b5db7fcb981ffec58efbb3169fa379862a44eff625051815184d5486ea61dafab0c1578d2cf8c8233eb23a2e2a6cdad32f2150b0eff027a0763dad44f34761813551703187d5764ebea3f301a13a87fa30af52f0615951845fcfc1faca1a128f85f62de8962e85f7f0ab65c0e3b0000",
    ],
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 08 Dec 2020 20:05:39 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Vary",
      "Accept-Encoding",
      "Content-Encoding",
      "gzip",
    ]
  );