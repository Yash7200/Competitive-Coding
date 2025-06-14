#include <stdio.h>
int main(void)
{
	int r,o,c;
	scanf("%d%d%d",&r,&o,&c);
	if((r)>=(((20-o)*6*6)+c))
	{
	    printf("NO");
	}
	else
	{
	    printf("YES");
	}
	return 0;
}