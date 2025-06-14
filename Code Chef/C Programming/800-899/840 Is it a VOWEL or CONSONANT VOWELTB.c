#include <stdio.h>
int main(void)
{
	char t;
	scanf("%c",&t);
	if(t=='A'||t=='E'||t=='I'||t=='O'||t=='U')
	{
	    printf("Vowel\n");
	}
	else
	{
	    printf("Consonant\n");
	}
	return 0;
}
