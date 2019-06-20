//Describe a quien voy a testear//
describe("cipher", () => {
  //it: ¿Qué voy a testear?//
  it("debería ser un objeto", () => {
    //assert: mocha, es lo que se está comparando para pasar el test.//
    //assert.equal(a que le aplico el test. 'que debería ser');//
    assert.equal(typeof cipher, "object");
  });

  //Test unitarios para ENCODE
  describe("cipher.encode", () => {
    it("debería ser una función", () => {
      assert.equal(typeof cipher.encode, "function");
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(
        window.cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33),
        "HIJKLMNOPQRSTUVWXYZABCDEFG"
      );
    });
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(
        window.cipher.encode("abcdefghijklmnopqrstuvwxyz", 33),
        "hijklmnopqrstuvwxyzabcdefg"
      );
    });
    it('debería retornar " " para " " con cualquier offset', () => {
      assert.equal(window.cipher.encode(" ", 33), " ");
    });
  });

  //Test Unitarios para DECODE
  describe("cipher.decode", () => {
    it("debería ser una función", () => {
      assert.equal(typeof cipher.decode, "function");
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(
        window.cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 33),
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      );
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(
        window.cipher.decode("hijklmnopqrstuvwxyzabcdefg", 33),
        "abcdefghijklmnopqrstuvwxyz"
      );
    });
    it('debería retornar " " para " " con cualquier offset', () => {
      assert.equal(window.cipher.decode(" ", 33), " ");
    });
  });
});
