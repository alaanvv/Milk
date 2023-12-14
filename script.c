#include <stdio.h>
#include <ctype.h>

#define FILE_NAME "code.m"
#define len(arr) (sizeof(arr) / sizeof(arr[0]))

// ---

enum TokenType {
  RET,
  INT
};

typedef struct {
  char value[255];
  int type;
} Token;

void tokenize(Token tokens_buffer[], char str[]);

// ---

int main() {
  FILE* p_file = fopen(FILE_NAME, "r");
  char file_buffer[255];
  if (!p_file) { return 1; }

  while (fgets(file_buffer, 255, p_file) != NULL) {
    Token tokens_buffer[5];
    tokenize(tokens_buffer, file_buffer);
  }

  fclose(p_file);
  return 0;
}

void tokenize(Token tokens_buffer[], char str[]) {
  int ti = 0;
  int bi = 0;
  char buffer[20];
  int ci = 0;
  char c = str[ci++];

  while (c != 10) {
    Token token;

    if (isalpha(c)) {
      do {
        buffer[bi++] = c;
        c = str[ci++];
      } while (isalnum(c));

      if (buffer == "ret") {
        token.type = RET;
        token.value = buffer;
      }
    }
    else if (isdigit(c)) {
      do {
        buffer[bi++] = c;
        c = str[ci++];
      } while (isdigit(c));

      token.type = INT;
      token.value = buffer;
    }

    if (token) tokens_buffer[ti++] = token;
    c = str[ci++];
  }
}
