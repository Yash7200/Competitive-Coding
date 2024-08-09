// dolls come in pairs

// someone stole **a doll

// n --> no. of dolls

// Note: single doll is stolen not multiple, we just need to find pair

// we will receive pair number multiple times don't make a mistake to consider it as no. of dolls

// to find such pair we need to perform XOR operation bitwise.
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n;
	    scanf("%d",&n);
	    int a[n],cnt=0;
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&a[j]);
	        cnt=cnt^a[j];
	    }
	    printf("%d\n",cnt);
	}
	return 0;
}