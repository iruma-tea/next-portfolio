const Contact = () => {
  return (
    <>
      <div>
        <div>
          <h1>Contact</h1>
          <p>お気軽にご連絡ください</p>
          <form>
            <label htmlFor="name">お名前</label>
            <input type="text" name="name" id="name" required />
            <label htmlFor="email">メールアドレス</label>
            <input type="email" name="email" id="email" required />
            <label htmlFor="textarea">ご用件</label>
            <textarea
              name="message"
              id="textarea"
              rows="10"
              required
            ></textarea>
            <button type="submit">送信</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
